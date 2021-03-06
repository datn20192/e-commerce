import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Subscription } from 'rxjs';
import { Chart } from 'chart.js';
import { ProductCategoryServiceAPI } from '../../../services/productCategory-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private yearSubs: Subscription;
  private monthSubs: Subscription;
  private productCategoriesListSubs: Subscription;
  //date
  chosenYear: number;
  chosenMonth: number;
  chosenDay: number;
  // Chart
  titleByRevenue: string; //chart name
  labelByRevenue: string[];
  titleByCategory: string; //chart name
  labelByCategory: string[];
  //---statistic by year
  dataBillsMonth: Array<string>[]; //save revenue by bills in 1 month
  revenueByMonth: any[]; // save total revenue by month
  revenueByCategoryYear: any[];

  //---statistic by all year
  dataBillsYear: Array<string>[];
  revenueByYear: any[];

  //---statistic by year %% month
  dataBillsYearMonth: Array<string>[]; //--chart 1
  revenueByYearMonth: any[];
  revenueByCategoryMonth: any[];//--chart 2

  //---statistic by day
  allCategoryName: string[];
  allCategoryID: string[];
  revenueByCategoryDay: any[];

  //---variable to draw chart
  chartByYear = null;// doanh thu theo nam
  chartByAllYear = null;
  chartByYearMonth = null;// doanh thu theo thang
  chartByDay = null;
  chartByCategoryMonth = null;
  chartByCategoryYear = null;

  //---Label of chart 2 (category)
  dataBillsByCategory: any[];

  constructor(
    private dashboard: DashboardService,
    private productCategoryApi: ProductCategoryServiceAPI
  ) { }

  ngOnInit() {
    this.getCategory();
    this.createDay();
  }
  ngOnDestroy() {
    this.yearSubs.unsubscribe();
    this.monthSubs.unsubscribe();
    if (this.productCategoriesListSubs) {
      this.productCategoriesListSubs.unsubscribe();
    }
  }
  //---Pick options to statistic
  //---just change state/value of dropdown
  createDay() {
    this.yearSubs = this.dashboard.currentYear.subscribe(year => {
      this.chosenYear = year;
      this.chosenMonth = 0;
      this.chosenDay = 0;
    });
    this.monthSubs = this.dashboard.currentMonth.subscribe(month => {
      this.chosenMonth = month;
      this.chosenDay = 0;
      this.dashboard.genDaysByMonthAndYear(this.chosenYear, this.chosenMonth);
    });
  }
  getYear(date: string) {
    return ((new Date(date)).getFullYear()).toString();
  }
  getMonth(date: string) {
    return (new Date(date)).getMonth(); //return month to 0-11
  }
  getDay(date: string) {
    return (new Date(date)).getDate();
  }
  //get category data
  getCategory() {
    this.productCategoriesListSubs = this.productCategoryApi.getProductCategories().subscribe(res => {
      this.allCategoryName = [];
      this.allCategoryID = [];
      let resultCategory = JSON.parse(res)['data'];
      resultCategory.forEach(category => {
        category.children.forEach(child => {
          this.allCategoryName.push(child.name);
          this.allCategoryID.push(child.id);
        })
      });
      this.labelByCategory = this.allCategoryName;
      this.dataBillsByCategory = Array.from(Array(this.allCategoryID.length), () => ["0"]);
    })
  }

  //---load charts
  loadChart() {
    let data = []; // save data from api return
    this.getCategory();
    //---Statistics by all year
    if (!this.chosenYear) {

      return this.dashboard.getBillByAllYear().subscribe(res => {
        this.dataBillsYear = Array.from(Array(this.dashboard.years.length), () => ["0"]);
        this.revenueByYear = [];
        this.labelByRevenue = [];
        data = JSON.parse(res)['data'];
        console.log('AllYear', data);
        this.titleByRevenue = `Thống kê doanh thu tất cả các năm `;
        this.dashboard.years.forEach(i => {
          this.labelByRevenue.push(i.value);
          data.forEach(element => {
            if (this.getYear(element.date) === i.value) {
              this.dataBillsYear[i.index].push(element.totalMoney);
            }
          })
        });
        this.revenueByYear = this.dataBillsYear.map(element => element.reduce((prev, curr) => prev += Number(curr) / 1000000, 0));
        this.drawChartByAllYear();
      })
    }

    //---Statistics by year
    if (this.chosenYear && !this.chosenMonth) {

      return this.dashboard.getBillByYear(this.chosenYear.toString()).subscribe(res => {
        this.dataBillsMonth = Array.from(Array(12), () => ["0"]);
        this.revenueByMonth = [];
        this.revenueByCategoryYear = [];
        this.labelByRevenue = [];
        data = JSON.parse(res)['data'];
        this.titleByRevenue = `Thống kê doanh thu năm ${this.chosenYear}`;
        this.titleByCategory = `Thống kê doanh thu năm ${this.chosenYear}`;
        this.labelByRevenue = Array.from(Array(12)).map((e, index) => e = `Tháng ${index + 1}`);
        data.forEach(element => {
          this.dataBillsMonth[this.getMonth(element.date)].push(element.totalMoney);

        })
        this.revenueByMonth = this.dataBillsMonth.map(element => element.reduce((prev, curr) => prev += Number(curr) / 1000000, 0));

        this.allCategoryID.forEach((id, index) => {
          data.forEach(element => {
            element.cart.forEach(product => {
              if (product.product['category'] === id) {
                this.dataBillsByCategory[index].push(Number(product.product['price']) * product.quantityPurchased);
              }
            })
          })
        })
        this.revenueByCategoryYear = this.dataBillsByCategory.map(e => e.reduce((prev, curr) => prev += Number(curr) / 1000000, 0));
        this.drawChartByYear();
        this.drawChartCategoryByYear();
      })
    }


    //---Statistics by year && month
    if (this.chosenYear && this.chosenMonth && !this.chosenDay) {

      return this.dashboard.getBillByYearMonth(this.chosenYear.toString(), this.chosenMonth.toString()).subscribe(res => {
        this.dataBillsYearMonth = Array.from(Array(this.dashboard.days), () => ["0"]);
        this.revenueByYearMonth = [];
        this.revenueByCategoryMonth = [];
        this.labelByRevenue = [];
        data = JSON.parse(res)['data'];
        console.log('YearMonth', data);
        this.titleByRevenue = `Thống kê doanh thu tháng ${this.chosenMonth}/${this.chosenYear}`;
        this.titleByCategory = `Thống kê doanh thu tháng ${this.chosenMonth}/${this.chosenYear}`;
        this.labelByRevenue = Array.from(Array(this.dashboard.days)).map((e, index) => e = `Ngày ${index + 1}`);
        data.forEach((element => {
          this.dataBillsYearMonth[this.getDay(element.date) - 1].push(element.totalMoney);
        }))
        this.revenueByYearMonth = this.dataBillsYearMonth.map(e => e.reduce((prev, curr) => prev += Number(curr) / 1000000, 0));

        this.allCategoryID.forEach((id, index) => {
          data.forEach(element => {
            element.cart.forEach(product => {
              if (product.product['category'] === id) {
                this.dataBillsByCategory[index].push(Number(product.product['price']) * product.quantityPurchased);
              }
            })
          })
        })
        this.revenueByCategoryMonth = this.dataBillsByCategory.map(e => e.reduce((prev, curr) => prev += Number(curr) / 1000000, 0));
        this.drawChartByYearMonth();
        this.drawChartCategoryByMonth();
      })
    }
    else {
      return this.dashboard.getBillByDay(this.chosenYear, this.chosenMonth.toString(), this.chosenDay.toString()).subscribe(res => {
        data = JSON.parse(res)['data'];
        console.log('Day', data);
        this.titleByCategory = `Thống kê doanh thu ngày ${this.chosenDay}/${this.chosenMonth}/${this.chosenYear}`;
        this.allCategoryID.forEach((id, index) => {
          data.forEach(element => {
            element.cart.forEach(product => {
              if (product.product['category'] === id) {
                this.dataBillsByCategory[index].push(Number(product.product['price']) * product.quantityPurchased);
              }
            })
          })
        })
        this.revenueByCategoryDay = this.dataBillsByCategory.map(e => e.reduce((prev, curr) => prev += Number(curr) / 1000000, 0));
        this.drawChartCategoryByDay();
      })
    }
  }

  //---Draw chart by year
  drawChartByYear() {
    if (this.chartByAllYear !== null) {
      this.chartByAllYear.destroy();
    }
    if (this.chartByYear !== null) {
      this.chartByYear.destroy();
    }
    if (this.chartByYearMonth !== null) {
      this.chartByYearMonth.destroy();
    }

    this.chartByYear = this.setBarChartInfor(this.chartByYear, "chart-by-time", this.labelByRevenue, this.revenueByMonth, this.titleByRevenue);
  }

  //---Draw chart by all year
  drawChartByAllYear() {
    if (this.chartByAllYear !== null) {
      this.chartByAllYear.destroy();

    }
    if (this.chartByYear !== null) {
      this.chartByYear.destroy();
    }
    if (this.chartByYearMonth !== null) {
      this.chartByYearMonth.destroy();
    }

    this.chartByAllYear = this.setBarChartInfor(this.chartByAllYear, "chart-by-time", this.labelByRevenue, this.revenueByYear, this.titleByRevenue);
  }
  //---Draw chart by year && month
  drawChartByYearMonth() {
    if (this.chartByAllYear !== null) {
      this.chartByAllYear.destroy();
    }
    if (this.chartByYear !== null) {
      this.chartByYear.destroy();
    }
    if (this.chartByYearMonth !== null) {
      this.chartByYearMonth.destroy();
    }

    this.chartByYearMonth = this.setBarChartInfor(this.chartByYearMonth, "chart-by-time", this.labelByRevenue, this.revenueByYearMonth, this.titleByRevenue);
  }
  //draw chart by day
  drawChartCategoryByDay() {

    this.chartByDay = this.setBarChartInfor(this.chartByDay, "chart-by-category", this.labelByCategory, this.revenueByCategoryDay, this.titleByCategory);
  }

  //---draw by category
  drawChartCategoryByMonth() {

    this.chartByCategoryMonth = this.setBarChartInfor(this.chartByCategoryMonth, "chart-by-category", this.labelByCategory, this.revenueByCategoryMonth, this.titleByCategory);
  }

  drawChartCategoryByYear() {

    this.chartByCategoryYear = this.setBarChartInfor(this.chartByCategoryYear, "chart-by-category", this.labelByCategory, this.revenueByCategoryYear, this.titleByCategory);

  }

  private setBarChartInfor(chart, context: string, labelsList, chartData, textTitle) {
    if (this.chartByDay !== null) {
      this.chartByDay.destroy();
    }
    if (this.chartByCategoryMonth !== null) {
      this.chartByCategoryMonth.destroy();
    }
    if (this.chartByCategoryYear !== null) {
      this.chartByCategoryYear.destroy();
    }
    chart = new Chart(context, {
      type: 'bar',
      data: {
        labels: labelsList,
        datasets: [{
          label: 'Doanh số (Đơn vị: Triệu VNĐ)',
          data: chartData,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1.5
        }]
      },
      options: {
        title: {
          display: true,
          text: textTitle
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    return chart;
  }

}
