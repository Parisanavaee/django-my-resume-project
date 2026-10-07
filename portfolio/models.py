from django.db import models

class Contact(models.Model):
    name = models.CharField()
    phone = models.CharField()
    subject = models.CharField()
    message = models.TextField()
    
    def __str__(self):
        return f"{self.name} * {self.subject}"
