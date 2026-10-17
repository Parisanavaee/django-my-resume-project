from django.shortcuts import render
from .form import UsersForm

def login(r):
    if r.method == "POST":
        form = UsersForm(r.POST)
        if form.is_valid():
            form.save()
        
    form = UsersForm()
    return render(r, "login.html", {"form": form})
