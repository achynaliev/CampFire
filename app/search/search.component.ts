import { Component, Input, ContentChild , TemplateRef} from "@angular/core";
import { SearchResult } from "./search.model";
import { SearchService } from "./search.service";
import { ngRoute } from "angular-route"

@Component({
    selector: 'app-search',
    template: `<div class="search-main">
                <div class="search-input">
                  <input placeholder="Search" type="text" #box (keyup)="onChange(box.value)"/>
                </div>
                <div class="search-index">
                  <app-search-item
                      [searchResult] = "searchResult"
                      *ngFor="let searchResult of searchResults"></app-search-item>
                 </div>
              </div>

`
})
export class SearchComponent {
    @ContentChild(TemplateRef)
    template: TemplateRef<SearchResult>;
    searchResults: SearchResult[];

    constructor(private searchService: SearchService) {}

    onChange(value) {
      if (value.length > 1) {
        this.searchService.getSearchResults(value)
          .subscribe(
            (searchResults: SearchResult[]) =>{
              this.searchResults = searchResults
            }
          );
      } else {
        this.searchService.getSearchResults("##")
          .subscribe(
            (searchResults: SearchResult[]) =>{
              this.searchResults = searchResults
            }
          );
      }
    }

    // ngOnInit() {
    //   this.searchService.getSearchResults("at")
    //     .subscribe(
    //       (searchResults: SearchResult[]) =>{
    //         this.searchResults = searchResults
    //         console.log(searchResults);
    //       }
    //     );
    // }
}
// <input placeholder="Search" type="text" #box (keyup)="onChange(box.value)"/>

// <div class="search-main">
//   <div class="search-input">
//   <input placeholder="Search" type="text" #box (keyup)="onChange(box.value)"/>
//   </div>
//   <div class="search-index">
//     <app-search-item
//       [searchResults] = "searchResults"
//       *ngFor="let result of results"></app-search-item>
//   </div>
// </div>
