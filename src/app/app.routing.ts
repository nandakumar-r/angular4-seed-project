import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
    {path: ' ', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
