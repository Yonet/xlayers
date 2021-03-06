import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SketchSelectedLayerDirective } from './selected-layer.directive';
import { SketchCanvasComponent } from './sketch-canvas.component';
import { SketchContainerComponent } from './sketch-container.component';
import { SketchDropzoneComponent } from './sketch-dropzone.component';
import { SketchLayerComponent } from './sketch-layer.component';
import { SketchPageComponent } from './sketch-page.component';
import { SketchStopEventPropagationDirective } from './sketch-stop-event-propagation.directive';
import { SketchTooltilDirective } from './sketch-tooltip.directive';


@NgModule({
  imports: [CoreModule],
  declarations: [
    SketchCanvasComponent,
    SketchDropzoneComponent,
    SketchContainerComponent,
    SketchPageComponent,
    SketchLayerComponent,
    SketchStopEventPropagationDirective,
    SketchSelectedLayerDirective,
    SketchTooltilDirective
  ],
  exports: [SketchCanvasComponent, SketchDropzoneComponent, SketchContainerComponent, SketchSelectedLayerDirective]
})
export class AngularSketchModule {}
