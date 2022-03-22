import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { StyleComponent } from './component/style/style.component';
import { OneComponent } from './component/one/one.component';
import { TwoComponent } from './component/two/two.component';
import { RenderHighlightDirective } from './directive/render-highlight.directive';
import { AppRenderHightlightDirective } from './directive/app-render-hightlight.directive';
import { HostlistenerDirective } from './directive/hostlistener.directive';
import { CustomRenderhigHighLightDirective } from './directive/custom-renderhig-high-light.directive';
import { SwitchcaseComponent } from './component/switchcase/switchcase.component';
import { ShowApiDataComponent } from './component/show-api-data/show-api-data.component';

import {RestapiService} from './service/restapi.service';
import { EmployeeComponent } from './component/employee/employee.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { MyuserComponent } from './component/myuser/myuser.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { DemoRxjsComponent } from './component/demo-rxjs/demo-rxjs.component';
import { TemplateDrivenFromComponent } from './component/template-driven-from/template-driven-from.component';
import { TformComponent } from './component/tform/tform.component';
import { ReactiveformsComponent } from './component/reactiveforms/reactiveforms.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { LifecyclecompComponent } from './component/lifecyclecomp/lifecyclecomp.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { SharedService} from './service/shared.service';
import { ShapeserviceService} from './service/shapeservice.service';
import { ProductComponent } from './component/product/product.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { GraphComponent } from './component/graph/graph.component';
import { TemplatedrivenComponent } from './component/templatedriven/templatedriven.component';
import { ReactiveFormsComponent } from './component/reactive-forms/reactive-forms.component'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StyleComponent,
    OneComponent,
    TwoComponent,
    RenderHighlightDirective,
    AppRenderHightlightDirective,
    HostlistenerDirective,
    CustomRenderhigHighLightDirective,
    SwitchcaseComponent,
    ShowApiDataComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    MyuserComponent,
    DashboardComponent,
    UserlistComponent,
    DemoRxjsComponent,
    TemplateDrivenFromComponent,
    TformComponent,
    ReactiveformsComponent,
    PipeComponent,
    LifecyclecompComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    ProductComponent,
    ProductlistComponent,
    GraphComponent,
    TemplatedrivenComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RestapiService,SharedService,ShapeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
