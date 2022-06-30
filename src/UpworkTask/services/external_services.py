import requests
from django.conf import settings


def log_form_submission(username: str, email: str, ip: str):
    response = requests.post(settings.API_LOG_SERVICE_URL, json={
        "name": username,
        "email": email,
        "ip": ip
    })
