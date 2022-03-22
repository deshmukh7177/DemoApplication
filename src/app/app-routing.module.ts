import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { ShowApiDataComponent } from './component/show-api-data/show-api-data.component';
import { UserComponent } from './component/user/user.component';
import { MyuserComponent } from './component/myuser/myuser.component';
import { StyleComponent } from './component/style/style.component';
import { DashboardComponent} from './component/dashboard/dashboard.component'
import { UserlistComponent } from './component/userlist/userlist.component';
import { SwitchcaseComponent } from './component/switchcase/switchcase.component';
import {DemoRxjsComponent} from './component/demo-rxjs/demo-rxjs.component'
import { TemplateDrivenFromComponent } from './component/template-driven-from/template-driven-from.component';
import { ReactiveformsComponent } from './component/reactiveforms/reactiveforms.component';
import { LifecyclecompComponent } from './component/lifecyclecomp/lifecyclecomp.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ProductComponent} from './component/product/product.component';
import { ProductlistComponent} from './component/productlist/productlist.component';
import { GraphComponent} from './component/graph/graph.component'


import { PipeComponent } from './component/pipe/pipe.component';

// const routes: Routes = [];
const routes : Routes =[
  { path:'emplist',component:EmployeeListComponent},
  { path:'showapidata',component:ShowApiDataComponent},
  { path:'users',component:UserComponent},
  { path:'myuser',component:MyuserComponent},
  { path:'style',component:StyleComponent},
  { path:'rxjs',component:DemoRxjsComponent},
  { path:'home/:id/:name',component:DashboardComponent},
  { path:'tform',component:TemplateDrivenFromComponent},
  { path:'pipe',component:PipeComponent},
  { path:'rform',component:ReactiveformsComponent},
  { path:'lifecycle',component:LifecyclecompComponent},
  { path:'first',component:FirstComponent},
  { path:'second',component:SecondComponent},
  { path: 'product', component: ProductComponent},
  { path:'productlist/:id',component:ProductlistComponent},
  { path:'grpah',component:GraphComponent},
  
  { path:'listuser',component:UserlistComponent,children:[
    { 
      path:'id/name',component:SwitchcaseComponent
    }
  ]},
  {path:'',component:UserComponent},
  // {path:'**',redirectTo:'emplist'},
  

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
