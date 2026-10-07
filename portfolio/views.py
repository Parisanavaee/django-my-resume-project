from django.shortcuts import render, redirect
from .form import ContactForm


def index(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
        
    else:
        form = ContactForm()

    return render(request, "index.html", {"form": form})