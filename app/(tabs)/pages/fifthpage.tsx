import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function FifthPage() {
  const router = useRouter();

  const [sys, setSys] = useState("");
  const [dia, setDia] = useState("");
  const [pulse, setPulse] = useState("");
  const [weight, setWeight] = useState("");

  const [data, setData] = useState<any>(null);

  const handleSubmit = () => {
    setData({
      sys: Number(sys),
      dia: Number(dia),
      pulse: Number(pulse),
      weight: Number(weight),
    });
  };

  const getBPStatus = () => {
    if (!data) return "";
    if (data.sys >= 180 || data.dia >= 120) return "Hypertensive Crisis 🚨";
    if (data.sys >= 140 || data.dia >= 90) return "High BP ⚠️";
    if (data.sys >= 120) return "Pre-High BP ⚠️";
    if (data.sys < 90 || data.dia < 60) return "Low BP ⚠️";
    return "Normal ✅";
  };

  const getPulseStatus = () => {
    if (!data) return "";
    if (data.pulse > 130) return "Very High Pulse 🚨";
    if (data.pulse > 100) return "High Pulse ⚠️";
    if (data.pulse >= 60) return "Normal ✅";
    if (data.pulse >= 40) return "Low Pulse ⚠️";
    return "Dangerously Low 🚨";
  };

  const getWeightStatus = () => {
    if (!data) return "";
    if (data.weight > 100) return "Obese 🚨";
    if (data.weight > 75) return "Overweight ⚠️";
    if (data.weight >= 50) return "Normal ✅";
    if (data.weight >= 40) return "Underweight ⚠️";
    return "Severely Underweight 🚨";
  };

  const getOverallStatus = () => {
    if (!data) return "";

    const statuses = [getBPStatus(), getPulseStatus(), getWeightStatus()];

    if (statuses.some((s) => s.includes("🚨"))) return "Critical Condition 🚨";
    if (statuses.some((s) => s.includes("⚠️"))) return "Needs Attention ⚠️";

    return "Healthy ✅";
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/smartcare.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <ScrollView>
          <Text style={styles.title}>Health Report</Text>

          <View style={styles.inputCard}>
            <TextInput
              placeholder="SYS"
              style={styles.input}
              keyboardType="numeric"
              value={sys}
              onChangeText={setSys}
            />
            <TextInput
              placeholder="DIA"
              style={styles.input}
              keyboardType="numeric"
              value={dia}
              onChangeText={setDia}
            />
            <TextInput
              placeholder="Pulse"
              style={styles.input}
              keyboardType="numeric"
              value={pulse}
              onChangeText={setPulse}
            />
            <TextInput
              placeholder="Weight"
              style={styles.input}
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          {data && (
            <View style={styles.resultCard}>
              <Text style={styles.resultTitle}>Health Status</Text>
              <Text style={styles.warningText}>BP: {getBPStatus()}</Text>
              <Text style={styles.warningText}>Pulse: {getPulseStatus()}</Text>
              <Text style={styles.warningText}>
                Weight: {getWeightStatus()}
              </Text>
              <Text style={styles.warningText}>
                Overall: {getOverallStatus()}
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, padding: 20, backgroundColor: "rgba(0,0,0,0.35)" },
  title: { fontSize: 24, color: "#fff", marginBottom: 20 },

  inputCard: { backgroundColor: "#fff", padding: 15, borderRadius: 15 },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },

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
    borderRadius: 15,
    marginTop: 20,
  },

  resultTitle: { fontWeight: "bold" },

  warningText: { color: "red", fontWeight: "bold", marginTop: 5 },
});
