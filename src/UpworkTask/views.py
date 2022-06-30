from django.http.request import HttpRequest
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


from .forms import InfoGatherForm
from .services.external_services import log_form_submission


@csrf_exempt
def form_view(request: HttpRequest):
    form = InfoGatherForm(request.POST)
    if not form.is_valid():
        return JsonResponse({
            'status': 'fail',
            'error': 'Form is not valid'
        })

    username = form.cleaned_data['username']
    email = form.cleaned_data['email']

    ip = request.headers.get('X-Real-IP')

    log_form_submission(username, email, ip)

    return JsonResponse({
        'status': 'success'
    })

