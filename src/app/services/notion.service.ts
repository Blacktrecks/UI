import { Injectable } from '@angular/core';
import { Client } from '@notionhq/client';

@Injectable({
  providedIn: 'root'
})
export class NotionService {
  private notion: Client;
  private apiUrl = 'http://localhost:8080/https://api.notion.com/v1/databases';
  constructor() {
    // Replace 'YOUR_INTEGRATION_SECRET' with your actual Notion Integration Secret (API key)
    this.notion = new Client({ auth: 'secret_a6uZ1lq5psi794coIxn5VhONUDgZty4UmbM681xjXCP' });
  }

  // Fetch user tasks from Notion database
  getUserTasks(): Promise<any[]> {
    return this.notion.databases.query({
      database_id: 'f4804b5d97b0436a98b1cdd2d5180aa3?v=89d6a959cc154bee98acd32301ac34d7' // Replace with your actual Notion database ID for user tasks
    })
    .then(response => {
      return response.results;
    })
    .catch(error => {
      console.error('Error fetching tasks:', error);
      return [];
    });
  }

  // Fetch user notes from Notion database
  getUserNotes(): Promise<any[]> {
    return this.notion.databases.query({
      database_id: 'a2ee441aac944e86a588d91f503b9ba1?v=227d4dd55f094cd389b657b80a0b2630' // Replace with your actual Notion database ID for user notes
    })
    .then(response => {
      return response.results;
    })
    .catch(error => {
      console.error('Error fetching notes:', error);
      return [];
    });
  }

  // Add a new note to the user notes database
  addNewNote(title: string, description: string): Promise<any> {
    return this.notion.pages.create({
      parent: {
        database_id: 'a2ee441aac944e86a588d91f503b9ba1?v=227d4dd55f094cd389b657b80a0b2630' // Replace with your actual Notion database ID for user notes
      },
      properties: {
        title: {
          title: [
            {
              type: 'text',
              text: {
                content: title
              }
            }
          ]
        },
        description: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: description
              }
            }
          ]
        }
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.error('Error adding note:', error);
      return null;
    });
  }

  // Update a user task in the database
  updateTask(taskId: string, completed: boolean): Promise<any> {
    return this.notion.pages.update({
      page_id: taskId,
      properties: {
        completed: {
          checkbox: completed
        }
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.error('Error updating task:', error);
      return null;
    });
  }
}
