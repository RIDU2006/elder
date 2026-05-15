import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { foods } from "../data/foodData";

const RDA = {
  protein: 50,
  iron: 8,
  calcium: 1000,
};

export default function FourthPage() {
  const router = useRouter();

  const [selectedFoods, setSelectedFoods] = useState<any[]>([]);
  const [result, setResult] = useState<any>(null);
  const [deficiency, setDeficiency] = useState<any>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const toggleFood = (food: any) => {
    if (selectedFoods.includes(food)) {
      setSelectedFoods(selectedFoods.filter((f) => f !== food));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  const calculateNutrition = () => {
    let total = {
      calories: 0,
      protein: 0,
      iron: 0,
      calcium: 0,
    };

    selectedFoods.forEach((food) => {
      total.calories += food.calories;
      total.protein += food.protein;
      total.iron += food.iron;
      total.calcium += food.calcium;
    });

    setResult(total);

    let deficiencyResult: any = {};
    let suggestionList: string[] = [];

    if (total.protein < RDA.protein) {
      deficiencyResult.protein = "Low Protein ⚠️";
      suggestionList.push("Egg 🥚", "Milk 🥛");
    }

    if (total.iron < RDA.iron) {
      deficiencyResult.iron = "Low Iron ⚠️";
      suggestionList.push("Spinach 🌿");
    }

    if (total.calcium < RDA.calcium) {
      deficiencyResult.calcium = "Low Calcium ⚠️";
      suggestionList.push("Ragi 🌾", "Milk 🥛");
    }

    setDeficiency(deficiencyResult);
    setSuggestions(suggestionList);
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/smartcare.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <ScrollView>
          <Text style={styles.header}>Diet Planner</Text>

          {foods.map((food) => (
            <TouchableOpacity
              key={food.id}
              style={[
                styles.card,
                selectedFoods.includes(food) && styles.selectedCard,
              ]}
              onPress={() => toggleFood(food)}
            >
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodInfo}>
                Protein: {food.protein}g | Iron: {food.iron}mg | Calcium:{" "}
                {food.calcium}mg
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.button} onPress={calculateNutrition}>
            <Text style={styles.buttonText}>Calculate Nutrition</Text>
          </TouchableOpacity>

          {result && (
            <>
              <View style={styles.resultCard}>
                <Text style={styles.resultTitle}>Total Intake</Text>
                <Text>Calories: {result.calories}</Text>
                <Text>Protein: {result.protein}g</Text>
                <Text>Iron: {result.iron}mg</Text>
                <Text>Calcium: {result.calcium}mg</Text>
              </View>

              {/* ✅ FIXED NAVIGATION */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/pages/fifthpage")}
              >
                <Text style={styles.buttonText}>Go to Health Report</Text>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, padding: 20, backgroundColor: "rgba(0,0,0,0.35)" },
  header: { fontSize: 26, fontWeight: "bold", color: "#fff", marginBottom: 20 },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },

  selectedCard: {
    borderWidth: 2,
    borderColor: "#187be6",
  },

  foodName: { fontSize: 18, fontWeight: "bold" },
  foodInfo: { fontSize: 13, color: "#555" },

  button: {
    backgroundColor: "#187be6",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: { color: "#fff", fontWeight: "bold" },

  resultCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },

  resultTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
