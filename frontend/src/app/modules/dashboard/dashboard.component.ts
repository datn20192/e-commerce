import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Subscription } from 'rxjs';
import { Chart } from 'chart.js';
import { ProductCategoryServiceAPI } from '../../services/productCategory-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private dateSubs: Subscription;
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
  chartByYear = null;
  chartByAllYear = null;
  chartByYearMonth = null;
  chartByDay=null;
  chartByCategoryMonth = null;
  chartByCategoryYear = null;
  
//---Label of chart 2 (category)
  dataBillsByCategory: any[];

  constructor(
    private dashboard: DashboardService,
    private productCategoryApi: ProductCategoryServiceAPI
    ) { }

  ngOnInit() {
    this.createDay();
    this.loadChart();
  }
  ngOnDestroy() {
    this.dateSubs.unsubscribe();
    if(this.productCategoriesListSubs){
      this.productCategoriesListSubs.unsubscribe();
    }
  }
  //---Pick options to statistic
  //---just change state/value of dropdown
  createDay() {
    this.dateSubs = this.dashboard.currentYear.subscribe(year => {
      this.chosenYear = year;
      this.chosenMonth = 0;
      this.chosenDay = 0;
    });
    this.dateSubs = this.dashboard.currentMonth.subscribe(month => {
      this.chosenMonth = month;
      this.chosenDay = 0;
      this.dashboard.genDaysByMonthAndYear(this.chosenYear, this.chosenMonth);
    });
  }
  //get category data
  getCategory(){
    this.productCategoriesListSubs  = this.productCategoryApi.getProductCategories().subscribe(res => {
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
      this.dataBillsByCategory = Array.from(Array(this.allCategoryID.length),() => ["0"]);
    })
  }

  //---load charts
  loadChart() {

    let data = []; // save data from api return

    //---Statistics by all year
    if(!this.chosenYear){
      this.dataBillsYear = Array.from(Array(this.dashboard.years.length), () => ["0"]);
      this.revenueByYear = [];
      return this.dashboard.getBillByAllYear().subscribe(res => {
        this.labelByRevenue = [];
        data = JSON.parse(res)['data'];
        this.titleByRevenue = `Thống kê doanh thu tất cả các năm `;
        this.dashboard.years.forEach(i => {
          this.labelByRevenue.push(i.value);
          data.forEach(element => {
            if(element.year === i.value){
              this.dataBillsYear[i.index].push(element.totalPrice);
            }
          })
        });
        this.revenueByYear = this.dataBillsYear.map(element => element.reduce((prev, curr) => prev += Number(curr) / 1000000,0));
        this.drawChartByAllYear();
      })
    }

    //---Statistics by year
    if (this.chosenYear && !this.chosenMonth) {
      
      this.dataBillsMonth = Array.from(Array(12), () => ["0"]);
      this.revenueByMonth = [];
      this.revenueByCategoryYear =[];
      this.getCategory();

      return this.dashboard.getBillByYear(this.chosenYear.toString()).subscribe(res => {
        this.labelByRevenue = [];
        data = JSON.parse(res)['data'];
        this.titleByRevenue = `Thống kê doanh thu năm ${this.chosenYear}`;
        this.titleByCategory = `Thống kê doanh thu năm ${this.chosenYear}`;
        this.labelByRevenue = Array.from(Array(12)).map((e, index) => e = `Tháng ${index+1}`);
        data.forEach(element => {
          this.dataBillsMonth[element.month - 1].push(element.totalPrice);

        })
        this.revenueByMonth = this.dataBillsMonth.map(element => element.reduce((prev, curr) => prev += Number(curr) / 1000000, 0));
        
        this.allCategoryID.forEach((id,index) => {
          data.forEach(element => {
            element.cart.forEach(res => {
              if(res.category === id){
                this.dataBillsByCategory[index].push(Number(res.price)*res.quantity);
              }
            })
          })
        })
        this.revenueByCategoryYear = this.dataBillsByCategory.map(e => e.reduce((prev,curr) => prev += Number(curr) / 1000000,0));
        this.drawChartByYear();
        this.drawChartCategoryByYear();
      })
    }


    //---Statistics by year && month
    if(this.chosenYear && this.chosenMonth && !this.chosenDay){

      this.dataBillsYearMonth = Array.from(Array(this.dashboard.days), () => ["0"]);
      this.revenueByYearMonth =[];
      this.revenueByCategoryMonth =[];
      this.getCategory();

      return this.dashboard.getBillByYearMonth(this.chosenYear,this.chosenMonth.toString()).subscribe(res => {
        this.labelByRevenue = [];
        data = JSON.parse(res)['data'];
        this.titleByRevenue = `Thống kê doanh thu tháng ${this.chosenMonth}/${this.chosenYear}`;
        this.titleByCategory = `Thống kê doanh thu tháng ${this.chosenMonth}/${this.chosenYear}`;
        this.labelByRevenue = Array.from(Array(this.dashboard.days)).map((e, index) => e = `Ngày ${index+1}`);
        data.forEach((element => {
          this.dataBillsYearMonth[element.day-1].push(element.totalPrice);
        }))
        this.revenueByYearMonth = this.dataBillsYearMonth.map(e => e.reduce((prev,curr) => prev += Number(curr) / 1000000,0));
        this.allCategoryID.forEach((id,index) => {
          data.forEach(element => {
            element.cart.forEach(res => {
              if(res.category === id){
                this.dataBillsByCategory[index].push(Number(res.price)*res.quantity);
              }
            })
          })
        })
        this.revenueByCategoryMonth = this.dataBillsByCategory.map(e => e.reduce((prev,curr) => prev += Number(curr) / 1000000,0));
        this.drawChartByYearMonth();
        this.drawChartCategoryByMonth();
      })
    }
    else {
      this.getCategory();
      return this.dashboard.getBillByDay(this.chosenYear,this.chosenMonth.toString(),this.chosenDay.toString()).subscribe(res => {
        data = JSON.parse(res)['data'];
        this.titleByCategory = `Thống kê doanh thu ngày ${this.chosenDay}/${this.chosenMonth}/${this.chosenYear}`;
        this.allCategoryID.forEach((id,index) => {
          data.forEach(element => {
            element.cart.forEach(res => {
              if(res.category === id){
                this.dataBillsByCategory[index].push(Number(res.price)*res.quantity);
              }
            })
          })
        })
        this.revenueByCategoryDay = this.dataBillsByCategory.map(e => e.reduce((prev,curr) => prev += Number(curr) / 1000000,0));
        this.drawChartCategoryByDay();
      })
    }
  }

  //---Draw chart by year
  drawChartByYear() {
    if (this.chartByAllYear !== null ) {
      this.chartByAllYear.destroy();
    }
    if(this.chartByYear !== null) {
      this.chartByYear.destroy();
    }
    if(this.chartByYearMonth !== null){
      this.chartByYearMonth.destroy();
    }
    this.chartByYear = new Chart("chart-by-time", {
      type: 'bar',
      data: {
        labels: this.labelByRevenue,
        datasets: [{
          label: 'Doanh số (Đơn vị: Triệu VNĐ)',
          data: this.revenueByMonth,
          backgroundColor:'rgba(153, 102, 255, 0.2)',
          borderColor:'rgba(153, 102, 255, 1)',
          borderWidth: 1.5
        }]
      },
      options: {
        title: {
          display: true,
          text: this.titleByRevenue
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
  }

  //---Draw chart by all year
  drawChartByAllYear() {
    if (this.chartByAllYear !== null ) {
      this.chartByAllYear.destroy();
    }
    if(this.chartByYear !== null) {
      this.chartByYear.destroy();
    }
    if(this.chartByYearMonth !== null){
      this.chartByYearMonth.destroy();
    }
    this.chartByYear = new Chart("chart-by-time", {
      type: 'bar',
      data: {
        labels: this.labelByRevenue,
        datasets: [{
          label: 'Doanh số (Đơn vị: Triệu VNĐ)',
          data: this.revenueByYear,
          backgroundColor:'rgba(153, 102, 255, 0.2)',
          borderColor:'rgba(153, 102, 255, 1)',
          borderWidth: 1.5
        }]
      },
      options: {
        title: {
          display: true,
          text: this.titleByRevenue
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
  }
  //---Draw chart by year && month
  drawChartByYearMonth(){
    if (this.chartByAllYear !== null ) {
      this.chartByAllYear.destroy();
    }
    if(this.chartByYear !== null) {
      this.chartByYear.destroy();
    }
    if(this.chartByYearMonth !== null){
      this.chartByYearMonth.destroy();
    }
    this.chartByYearMonth = new Chart("chart-by-time", {
      type: 'bar',
      data: {
        labels: this.labelByRevenue,
        datasets: [{
          label: 'Doanh số (Đơn vị: Triệu VNĐ)',
          data: this.revenueByYearMonth,
          backgroundColor:'rgba(153, 102, 255, 0.2)',
          borderColor:'rgba(153, 102, 255, 1)',
          borderWidth: 1.5
        }]
      },
      options: {
        title: {
          display: true,
          text: this.titleByRevenue
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
  }
  //draw chart by day
  drawChartCategoryByDay(){
    if(this.chartByDay !== null){
      this.chartByDay.destroy();
    }
    if(this.chartByCategoryMonth !== null){
      this.chartByCategoryMonth.destroy();
    }
    if(this.chartByCategoryYear !== null){
      this.chartByCategoryYear.destroy();
    }
    this.chartByDay = new Chart("chart-by-category", {
      type: 'bar',
      data: {
        labels: this.labelByCategory,
        datasets: [{
          label: 'Doanh số (Đơn vị: Triệu VNĐ)',
          data: this.revenueByCategoryDay,
          backgroundColor:'rgba(153, 102, 255, 0.2)',
          borderColor:'rgba(153, 102, 255, 1)',
          borderWidth: 1.5
        }]
      },
      options: {
        title: {
          display: true,
          text: this.titleByCategory
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
  }
  //---draw by category
  drawChartCategoryByMonth(){
    if(this.chartByDay !== null){
      this.chartByDay.destroy();
    }
    if(this.chartByCategoryMonth !== null){
      this.chartByCategoryMonth.destroy();
    }
    this.chartByCategoryMonth = new Chart("chart-by-category", {
      type: 'bar',
      data: {
        labels: this.labelByCategory,
        datasets: [{
          label: 'Doanh số (Đơn vị: Triệu VNĐ)',
          data: this.revenueByCategoryMonth,
          backgroundColor:'rgba(153, 102, 255, 0.2)',
          borderColor:'rgba(153, 102, 255, 1)',
          borderWidth: 1.5
        }]
      },
      options: {
        title: {
          display: true,
          text: this.titleByCategory
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
  }
  drawChartCategoryByYear(){
    if(this.chartByDay !== null){
      this.chartByDay.destroy();
    }
    if(this.chartByCategoryMonth !== null){
      this.chartByCategoryMonth.destroy();
    }
    if(this.chartByCategoryYear !== null){
      this.chartByCategoryYear.destroy();
    }
    this.chartByCategoryYear = new Chart("chart-by-category", {
      type: 'bar',
      data: {
        labels: this.labelByCategory,
        datasets: [{
          label: 'Doanh số (Đơn vị: Triệu VNĐ)',
          data: this.revenueByCategoryYear,
          backgroundColor:'rgba(153, 102, 255, 0.2)',
          borderColor:'rgba(153, 102, 255, 1)',
          borderWidth: 1.5
        }]
      },
      options: {
        title: {
          display: true,
          text: this.titleByCategory
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
  }
}
