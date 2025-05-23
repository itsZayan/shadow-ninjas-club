import { MapPin, Clock, Phone, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const BranchesSection = () => {
  const branches = [{
    name: "G-13 Main Dojo",
    location: "G-13 Sector, Islamabad",
    address: "Street 15, G-13/1, Islamabad",
    phone: "+92 310 1870059",
    schedule: [{
      day: "Monday",
      time: "Asr to Maghrib",
      type: "General Training + Judo"
    }, {
      day: "Wednesday",
      time: "Asr to Maghrib",
      type: "Kicks, Fights + Judo"
    }, {
      day: "Friday",
      time: "Asr to Maghrib",
      type: "Weapons Training Only"
    }],
    capacity: "45 Active Students",
    features: ["Main Branch", "Traditional Dojo", "Weapons Arsenal", "Meditation Room"],
    mapLink: "https://maps.app.goo.gl/VM6DF2SzjjhV4J4R7"
  }, {
    name: "I-14 Training Center",
    location: "I-14 Sector, Islamabad",
    address: "Main Boulevard, I-14/2, Islamabad",
    phone: "+92 310 1870059",
    schedule: [{
      day: "Tuesday",
      time: "Asr to Maghrib",
      type: "General Training"
    }, {
      day: "Thursday",
      time: "Asr to Maghrib",
      type: "General Training"
    }, {
      day: "Saturday",
      time: "Asr to Maghrib",
      type: "General Training"
    }],
    capacity: "20 Active Students",
    features: ["Modern Facility", "Youth Programs", "Family Classes"],
    mapLink: "https://maps.app.goo.gl/YYiKH6b83JY7V2vQ7"
  }, {
    name: "G-14 Elite Academy",
    location: "G-14 Sector, Islamabad",
    address: "Commercial Area, G-14/4, Islamabad",
    phone: "+92 310 1870059",
    schedule: [{
      day: "Saturday",
      time: "5:00 AM",
      type: "Morning Training"
    }, {
      day: "Sunday",
      time: "5:00 AM",
      type: "Morning Training"
    }],
    capacity: "5 Active Students",
    features: ["Elite Training", "Early Morning Sessions", "Advanced Programs"],
    mapLink: "https://maps.app.goo.gl/CCgf8B4Vv5V6B2S7A"
  }];
  return;
};
export default BranchesSection;