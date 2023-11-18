import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RECIPES } from '../../db-data';
import { Recipe } from '../model/recipes';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({ required: true })
   recipe!: Recipe;

  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  onRecipeViewed() {
    this.recipeSelected.emit(this.recipe)
  }
}
