import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs/operators';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  if (req.method !== 'GET') {
    loadingService.show();
  }

  return next(req).pipe(
    finalize(() => {
        loadingService.hide();
    })
  );
};
