import { Component, Input } from "@angular/core";

import { SearchResult } from "./search.model";
import { SearchService } from "./search.service";

@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html',
    styleUrls: ['./search-item.component.css']
})
export class SearchItem {
    @Input() searchResult: SearchResult;

    constructor(private searchService: SearchService) {}

}
