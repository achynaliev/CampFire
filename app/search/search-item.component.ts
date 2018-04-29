import { Component, Input } from "@angular/core";

import { SearchResult } from "./search.model";
import { SearchService } from "./search.service";

@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html',
    // styleUrls: ['./roomslistitem.component.css']
    styleUrls: ['./search-item.component.css']
})
export class SearchItem {
    @Input() searchResult: SearchResult;
    console.log(searchResult)

    constructor(private searchService: SearchService) {}

}
