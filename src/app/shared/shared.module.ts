import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

export const MATERIAL_MODULES = [
    MatButtonModule
];
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MATERIAL_MODULES
    ],
    exports: [
        FlexLayoutModule,
        MATERIAL_MODULES
    ],
    providers: [],
})
export class SharedModule { }
