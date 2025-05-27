'use client'
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Edit } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useAppSelector } from "@/hooks/use-app-selector";
import { RootState } from "@/redux/store";
import { useToast } from "@/hooks/use-toast";

const UserProfileSection = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-01-01",
    bio: "Fashion enthusiast and style lover.",
  });

  const { toast } = useToast();

  const handleProfileUpdate = () => {
    // In a real app, this would make an API call
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your personal information and profile details
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={profileData.name}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  name: e.target.value,
                })
              }
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={profileData.email}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  email: e.target.value,
                })
              }
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={profileData.phone}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  phone: e.target.value,
                })
              }
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input
              id="dob"
              type="date"
              value={profileData.dateOfBirth}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  dateOfBirth: e.target.value,
                })
              }
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell us about yourself..."
            value={profileData.bio}
            onChange={(e) =>
              setProfileData({ ...profileData, bio: e.target.value })
            }
            disabled={!isEditing}
            rows={3}
          />
        </div>
        {isEditing && (
          <div className="flex gap-2">
            <Button onClick={handleProfileUpdate}>Save Changes</Button>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserProfileSection;
