import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { MessagesComponent } from './Pages/messages/messages.component';

import { PostsComponent } from './Components/posts/posts.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { FullPostComponent } from './Components/full-post/full-post.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { MessageComponent } from './Components/message/message.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  {
    path: 'home',
    component: HomepageComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'notifs', component: NotificationComponent },
      { path: 'messages', component: MessagesComponent},
      { path: 'posts', component: PostsComponent},
    ],
  },
  {path:'conversation/:id', component:MessageComponent},
  {path:'user-profile/:username', component:UserProfileComponent},
  {path:'full-post', component: FullPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
