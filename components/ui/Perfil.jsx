"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export default function Perfil() {
  const [isEditing, setIsEditing] = useState(false);
  const [userRank] = useState(3); // This would be the current user level (from 1 to 5)
  const [userData, setUserData] = useState({
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan.perez@ejemplo.com",
    password: "••••••••",
  });

  const handleEditSave = () => {
    if (isEditing) {
      // Here would go the logic to save changes to the backend
      toast({
        title: "Profile updated",
        description:
          "The changes to your profile have been successfully saved.",
      });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = () => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-8 pt-16 bg-card rounded-lg shadow-lg">
      <div className="flex items-start space-x-8 mb-8">
        <Avatar className="w-32 h-32">
          <AvatarImage
            src="/placeholder.svg?height=128&width=128"
            alt="@user"
          />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold">User Profile</h2>
            <Button onClick={handleEditSave}>
              {isEditing ? "Save changes" : "Edit profile"}
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Ranking Level</span>
              <span className="text-sm font-medium">{userRank}/5</span>
            </div>
            <Progress value={(userRank / 5) * 100} className="w-full" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={isEditing ? "bg-background" : "bg-muted"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={isEditing ? "bg-background" : "bg-muted"}
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={userData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={isEditing ? "bg-background" : "bg-muted"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={userData.password}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={isEditing ? "bg-background" : "bg-muted"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
