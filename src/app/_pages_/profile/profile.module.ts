import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from '@tracker/_pages_/profile/profile/profile.component';
import { ProfileRoutingModule } from '@tracker/_pages_/profile/profile-routing.module';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
