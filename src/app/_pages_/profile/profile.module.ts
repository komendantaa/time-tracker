import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from '@tracker/_pages_/profile/profile/profile.component';
import { ProfileRoutingModule } from '@tracker/_pages_/profile/profile-routing.module';
import { SharedModule } from '@tracker/modules/shared/shared.module';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
