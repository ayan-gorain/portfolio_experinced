import { Component } from '@angular/core';

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
projects: Project[] = [
    {
      title: 'Banking Management System',
      description:
        'Full-stack banking application with account creation, transfers, loans, and authentication.',
      tech: ['Angular', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB'],
      github: 'https://github.com/ayan-gorain/banking-app',
    },
    {
      title: 'Doctor Appointment System',
      description:
        'Role-based system where patients book appointments, doctors manage availability, and admin controls access.',
      tech: ['Angular', 'REST API', 'Node.js', 'MongoDB'],
      
    },
    {
      title: 'Insurance Management Tool',
      description:
        'Web app for managing insuarnce, filtering, and admin controls.',
      tech: ['Angular', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/ayan-gorain/insurancecapstone',
      demo: 'https://insurancecapstone.vercel.app/',
    },
  ];


}
