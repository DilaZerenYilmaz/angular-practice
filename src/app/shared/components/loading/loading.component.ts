import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent implements OnInit {
  load: boolean = false;

  constructor(public loadingService: LoadingService){}

  ngOnInit(): void {
    this.loadingService.loading.subscribe((isLoading) => {
      this.load = isLoading;
      console.log("LOADİNG ÇALIŞIYOR..........");

    })
  }
}
