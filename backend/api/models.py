from django.db import models

class Soil(models.Model):
    nitrogen = models.FloatField()
    phosphorus = models.FloatField()  
    potassium = models.FloatField()
    moisture = models.FloatField()
    humidity = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Soil #{self.id}"  # Fix the name reference
