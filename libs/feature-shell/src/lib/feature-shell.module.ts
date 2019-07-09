import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

export const featureShellRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureShellRoutes)]
})
export class FeatureShellModule {}
