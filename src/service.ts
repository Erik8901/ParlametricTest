import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StateService {
    private globalState: any = {};

    set(key: string, value: any): void {
        this.globalState[key] = value;
    }

    get(key: string): any {
        return this.globalState[key];
    }
}