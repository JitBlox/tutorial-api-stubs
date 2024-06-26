/**
* Generated by JitBlox - rapid interactive prototyping of modern web apps from your browser.
* Upgrade to a Pro plan to remove this header, see https://www.jitblox.com/plans for more.
* 
* Check out this JitBlox project, Tutorial: API stubs (final), at
* https://www.jitblox.com/project/QzhPS4ivI5/tutorial-api-stubs-final
*/

import { Injectable } from '@angular/core';
import { WorkItem } from '../model';
import { bugs, tasks, userStories } from './work-items-api.service.mock-data';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WorkItemsApiService {

  public fetchTasks(): Observable<WorkItem[]> {
    return of(
      tasks
    );
  }

  public fetchBugs(): Observable<WorkItem[]> {
    return of(
      bugs
    );
  }

  public fetchUserStories(): Observable<WorkItem[]> {
    return of(
      userStories
    );
  }
}
