import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

export const MATERIAL_MODULES = [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
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
