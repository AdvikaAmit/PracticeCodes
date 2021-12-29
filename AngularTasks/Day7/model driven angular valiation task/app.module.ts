import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProductsComponent } from './products/products.component';
import { DemopageComponent } from './demopage/demopage.component';
import { LoginComponent } from './login/login.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SortOptionsComponent } from './sort-options/sort-options.component';
import { HooksdemoComponent } from './hooksdemo/hooksdemo.component';
import { DemoComponent } from './demo/demo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { GradePipe } from './grade.pipe';
import { SlicepipeComponent } from './slicepipe/slicepipe.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { RangepipeComponent } from './rangepipe/rangepipe.component';
import { RxJsComponent } from './rx-js/rx-js.component';
import { Demo1Component } from './demo1/demo1.component';
import { ApiCrudComponent } from './api-crud/api-crud.component';
import { CustomhttpinterceptorService } from './customhttpinterceptor.service';
import { Forms1Component } from './forms1/forms1.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    TechnologyComponent,
    ProductsComponent,
    DemopageComponent,
    LoginComponent,
    BindingComponent,
    StudentComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    ProductListComponent,
    DeptListComponent,
    FilterOptionsComponent,
    EmployeeListComponent,
    SortOptionsComponent,
    HooksdemoComponent,
    DemoComponent,
    PipedemoComponent,
    CustompipeComponent,
    GradePipe,
    SlicepipeComponent,
    FilterpipePipe,
    RangepipeComponent,
    RxJsComponent,
    Demo1Component,
    ApiCrudComponent,
    Forms1Component, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
     {provide: HTTP_INTERCEPTORS,useClass:CustomhttpinterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
