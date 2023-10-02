import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { NavComponent } from './Components/nav/nav.component';
import { RegisterComponent } from './Pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { MessagesComponent } from './Pages/messages/messages.component';
import { PostsComponent } from './Components/posts/posts.component';
import { httpInterceptorProviders } from './auth.interceptor';
import { ToastComponent } from './Components/toast/toast.component';
import { PostComponent } from './Components/post/post.component';
import { ProfileContainerComponent } from './Components/profile-container/profile-container.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { FullPostComponent } from './Components/full-post/full-post.component';
import { CommentComponent } from './Components/comment/comment.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { MessageComponent } from './Components/message/message.component';
// import { Socket } from 'socket.io-client';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    RegisterComponent,
    HomepageComponent,
    ProfileComponent,
    MessagesComponent,
    PostsComponent,
    ToastComponent,
    PostComponent,
    ProfileContainerComponent,
    UserProfileComponent,
    FullPostComponent,
    CommentComponent,
    NotificationComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // Socket
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
