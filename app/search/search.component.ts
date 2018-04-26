import { Component, Input } from "@angular/core";
import { SearchResult } from "./search.model";
import { SearchService } from "./search.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `<input type="text" #box (keyup)="onChange(box.value)"/>`
})
export class SearchComponent {
    searchResults: SearchResult[];

    constructor(private searchService: SearchService) {}

    onChange(value) {
      if (value.length > 1) {
        this.searchService.getSearchResults(value)
          .subscribe(
            (searchResults: SearchResult[]) =>{
              this.searchResults = searchResults;
              console.log(searchResults)
            }
          );
      }
    }
}
