from django import forms


class InfoGatherForm(forms.Form):
    username = forms.CharField(max_length=64, required=True)
    email = forms.EmailField(required=True)
