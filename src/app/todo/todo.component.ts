import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
    toDoListArray: any = [];

    ngOnInit() {
    }

  onAdd(itemTitle) {
    if (itemTitle.value.trim()) {
      this.toDoListArray.push({
        title: itemTitle.value,
        isChecked: false
      });
      itemTitle.value = null;
    }
  }

  alterCheck(key: string, item) {
        const updatedData = {
            title: item.title,
            isChecked: !item.isChecked
        };
        this.toDoListArray.splice(key, 1, updatedData);
    }

    deleteSelected() {
        this.toDoListArray.map((item, i) => {
            if (item.isChecked) {
                this.toDoListArray.splice(i, 1, null);
            }
        });
        this.toDoListArray = this.toDoListArray.filter(item => item);
    }

    deleteAll() {
        this.toDoListArray = [];
    }

    onDelete(key: string) {
        this.toDoListArray.splice(key, 1);
    }

}
