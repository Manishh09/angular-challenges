import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';
import { delay, finalize, Observable} from 'rxjs';

// STEP 2: Create a loading interceptor to show loading spinner when API is called
export const loadingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  // inject loading service
  const loadingService = inject(LoadingService);

  // clone request and set new header in cloned request
  const clonedRequest = req.clone({
    headers: req.headers.set('Authorization', 'Bearer token') // replace with actual token
  });

  // set loading to true when request is made
  loadingService.setLoading();

  // 1. handle request and get response
  // 2. use pipe to handle response and errors
  // 3. use finalize operator to set loading to false when request is completed
  return next(clonedRequest).pipe(
    delay(2000), // simulate delay for 2 seconds to see the loading UI completely
    finalize(() => {
      // This will run after both success and error cases
      loadingService.unsetLoading();
    }),
  )
};
