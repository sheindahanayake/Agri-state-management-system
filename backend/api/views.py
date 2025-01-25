from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Soil
from .serializer import SoilSerializer
from .recommender import recommender

class FertilizerRecommendationView(APIView):
    def post(self, request):
        try:
            data = {
                'nitrogen': request.data.get('nitrogen'),
                'phosphorus': request.data.get('phosphorus'),
                'potassium': request.data.get('potassium'),
                'moisture': request.data.get('moisture'),
                'humidity': request.data.get('humidity')
            }
            
            serializer = SoilSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                
                # Simple recommendation logic
                # if float(data['nitrogen']) < 50:
                #     recommendation = "Low nitrogen. Apply nitrogen-rich fertilizer."
                # else:
                #     recommendation = "Nitrogen levels good. Maintain current fertilization."
                    
                recommendation = recommender(data['nitrogen'], data['phosphorus'], data['potassium'])
                #recommendation = "hi"
                return Response({
                    'status': 'success',
                    'recommendation': recommendation
                })
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        except Exception as e:
            return Response({
                'status': 'error',
                'message': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)