import { Component } from '@angular/core';
type Skill = {
  name: string;
  icon: string;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
 skills: Skill[] = [
    { name: 'Angular', icon: 'angular' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Git & GitHub', icon: 'github' },
  ];
}
