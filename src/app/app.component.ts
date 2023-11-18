import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { RECIPES } from '../db-data';
import { Recipe } from './model/recipes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course';
  recipes = RECIPES;

  alertMe = () => {
    alert('ahoj')
  };

  onSelectedRecipe = (recipe:Recipe) => {
    console.log(`You have chosen the`, recipe);
  }

}
