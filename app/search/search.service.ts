import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { SearchResult } from "./search.model";

@Injectable()
export class SearchService {
  private searchResults: SearchResult[] = [];
    constructor(private http: Http) {
    }

    getSearchResults(query) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get('http://localhost:3000/search', {headers: headers, params: {query}})
            .map((response: Response) => {
                const results = response.json().obj;
                let transformedResults: SearchResult[] = [];
                for (let result of results) {
                    transformedResults.push(new SearchResult(
                        result.firstName,
                        result.lastName,
                        result.username
                    ));
                }
                this.searchResults = transformedResults;
                return transformedResults;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
