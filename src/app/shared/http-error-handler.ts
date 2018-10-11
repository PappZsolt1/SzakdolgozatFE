import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs'

export function errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error || "Server error.");
}