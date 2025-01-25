import numpy as np
import pandas as pd
import warnings
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix,accuracy_score
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.model_selection import GridSearchCV
from sklearn.metrics import accuracy_score, classification_report
import pickle
import os

def recommender(n,p,k):
    current_dir = os.path.dirname(os.path.abspath(__file__))
    model_path = os.path.join(current_dir, 'data', 'classifier1.pkl')
    model = pickle.load(open(model_path,'rb'))
    ans = model.predict([[n,p,k]])
    if ans[0] == 0:
        return "Advanced Crop Nutrition"
    elif ans[0] == 1:
        return "All-Purpose Crop Nutrient"
    elif ans[0] == 2:
        return "All-Purpose Fertilizer"
    elif ans[0] == 3:
        return "Ammonium Nitrate"
    elif ans[0] == 4:
        return "Ammonium Phosphate Mix"
    elif ans[0] == 5:
        return "Ammonium Sulfate Nitrate"
    elif ans[0] == 6:
        return "Anhydrous Ammonia"
    elif ans[0] == 7:
        return "Balanced Crop Nutrition"
    elif ans[0] == 8:
        return "Balanced Garden Fertilizer"
    elif ans[0] == 9:
        return "Balanced Mineral Fertilizer"
    elif ans[0] == 10:
        return "Balanced Plant Food"
    elif ans[0] == 11:
        return "Balanced Soil Supplement"
    elif ans[0] == 12:
        return "Calcium Nitrate"
    elif ans[0] == 13:
        return "Calcium Nitrate Supplement"
    elif ans[0] == 14:
        return "Complete Crop Nutrient"
    elif ans[0] == 15:
        return "Complete Crop Nutrition"
    elif ans[0] == 16:
        return "Comprehensive Soil Supplement"
    elif ans[0] == 17:
        return "Diammonium Phosphate (DAP)"
    elif ans[0] == 18:
        return "High Phosphorus Blend"
    elif ans[0] == 19:
        return "High Potash Fertilizer"
    elif ans[0] == 20:
        return "High Potassium Fertilizer"
    elif ans[0] == 21:
        return "Mineral Rich Fertilizer"
    elif ans[0] == 22:
        return "Mono Ammonium Phosphate"
    elif ans[0] == 23:
        return "Multipurpose Crop Nutrient"
    elif ans[0] == 24:
        return "Multipurpose Garden Fertilizer"
    elif ans[0] == 25:
        return "Nitrogen Booster Blend"
    elif ans[0] == 26:
        return "Nitrogen Mineral Mix"
    elif ans[0] == 27:
        return "Nitrogen Phosphate Mix"
    elif ans[0] == 28:
        return "Nitrogen Starter"
    elif ans[0] == 29:
        return "Nitrogen Support"
    elif ans[0] == 30:
        return "Phosphate Rich Fertilizer"
    elif ans[0] == 31:
        return "Phosphoric Fertilizer"
    elif ans[0] == 32:
        return "Phosphorus Boost Fertilizer"
    elif ans[0] == 33:
        return "Phosphorus Enriched Fertilizer"
    elif ans[0] == 34:
        return "Phosphorus Rich Blend"
    elif ans[0] == 35:
        return "Potassium Enhanced Blend"
    elif ans[0] == 36:
        return "Potassium Phosphate Blend"
    elif ans[0] == 37:
        return "Premium Plant Nutrition"
    elif ans[0] == 38:
        return "Premium Soil Enricher"
    elif ans[0] == 39:
        return "Urea"
    else:
        return "Invalid Selection"






