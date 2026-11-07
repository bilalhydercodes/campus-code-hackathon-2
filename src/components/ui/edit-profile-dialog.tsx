"use client";

import { useCharacterLimit } from "@/components/ui/dialog-utils/use-character-limit";
import { useImageUpload } from "@/components/ui/dialog-utils/use-image-upload";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, ImagePlus, X, Save } from "lucide-react";
import { useId, useState, useEffect } from "react";

export interface ProfileFormData {
  firstName: string;
  lastName: string;
  name: string;
  username: string;
  website: string;
  bio: string;
  avatarUrl?: string;
  coverUrl?: string;
}

export interface EditProfileDialogProps {
  initialData?: Partial<ProfileFormData>;
  onSave?: (data: ProfileFormData) => void;
  trigger?: React.ReactNode;
}

function Component({
  initialData,
  onSave,
  trigger,
}: EditProfileDialogProps = {}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState(false);

  const [firstName, setFirstName] = useState(initialData?.firstName || "Margaret");
  const [lastName, setLastName] = useState(initialData?.lastName || "Villard");
  const [username, setUsername] = useState(initialData?.username || "margaret-villard-69");
  const [website, setWebsite] = useState(initialData?.website || "www.margaret.com");

  const maxLength = 180;
  const {
    value: bioValue,
    characterCount,
    handleChange: handleBioChange,
    maxLength: limit,
  } = useCharacterLimit({
    maxLength,
    initialValue:
      initialData?.bio ||
      "Hey, I am Margaret, a web developer who loves turning ideas into amazing websites!",
  });

  // Keep state updated when initialData changes
  useEffect(() => {
    if (initialData?.firstName) setFirstName(initialData.firstName);
    if (initialData?.lastName) setLastName(initialData.lastName);
    if (initialData?.username) setUsername(initialData.username);
    if (initialData?.website) setWebsite(initialData.website);
  }, [initialData]);

  // Image upload hooks for Cover & Avatar
  const {
    previewUrl: coverPreview,
    fileInputRef: coverInputRef,
    handleThumbnailClick: handleCoverClick,
    handleFileChange: handleCoverChange,
    handleRemove: handleCoverRemove,
  } = useImageUpload();

  const {
    previewUrl: avatarPreview,
    fileInputRef: avatarInputRef,
    handleThumbnailClick: handleAvatarClick,
    handleFileChange: handleAvatarChange,
  } = useImageUpload();

  const defaultCover =
    initialData?.coverUrl ||
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop";

  const defaultAvatar =
    initialData?.avatarUrl ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop";

  const handleSaveChanges = (e?: React.FormEvent) => {
    e?.preventDefault();
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim() || firstName.trim();
    const updatedPayload: ProfileFormData = {
      firstName,
      lastName,
      name: fullName,
      username,
      website,
      bio: bioValue,
      avatarUrl: avatarPreview || defaultAvatar,
      coverUrl: coverPreview || defaultCover,
    };

    if (onSave) {
      onSave(updatedPayload);
    } else {
      // Local fallback: persist to localStorage
      try {
        const saved = localStorage.getItem("user");
        const current = saved ? JSON.parse(saved) : {};
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...current,
            name: fullName,
            username,
            website,
            bio: bioValue,
          })
        );
      } catch (err) {
        console.error("Failed to save profile:", err);
      }
    }

    setSavedFeedback(true);
    setTimeout(() => {
      setSavedFeedback(false);
      setOpen(false);
    }, 600);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline" className="cursor-pointer font-bold">Edit profile</Button>}
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 overflow-y-visible p-0 sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b border-border px-6 py-4 text-base font-bold text-gray-900">
            Edit profile
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Make changes to your profile here. You can change your photo and set a
          username.
        </DialogDescription>
        
        <form onSubmit={handleSaveChanges} className="flex flex-col">
          <div className="overflow-y-auto max-h-[70vh]">
            {/* Profile Cover Image */}
            <div className="h-32">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-muted">
                <img
                  className="h-full w-full object-cover"
                  src={coverPreview || defaultCover}
                  alt="Profile cover banner"
                  width={512}
                  height={96}
                />
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    className="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-offset-2 transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                    onClick={handleCoverClick}
                    aria-label="Upload banner image"
                  >
                    <ImagePlus size={16} strokeWidth={2} aria-hidden="true" />
                  </button>
                  {coverPreview && (
                    <button
                      type="button"
                      className="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-offset-2 transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                      onClick={handleCoverRemove}
                      aria-label="Remove banner image"
                    >
                      <X size={16} strokeWidth={2} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
              <input
                type="file"
                ref={coverInputRef}
                onChange={handleCoverChange}
                className="hidden"
                accept="image/*"
                aria-label="Upload banner image file"
              />
            </div>

            {/* Avatar Section */}
            <div className="-mt-10 px-6">
              <div className="relative flex size-20 items-center justify-center overflow-hidden rounded-full border-4 border-background bg-muted shadow-sm shadow-black/10">
                <img
                  src={avatarPreview || defaultAvatar}
                  className="h-full w-full object-cover"
                  width={80}
                  height={80}
                  alt="Profile avatar"
                />
                <button
                  type="button"
                  className="absolute flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-offset-2 transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                  onClick={handleAvatarClick}
                  aria-label="Change profile picture"
                >
                  <ImagePlus size={16} strokeWidth={2} aria-hidden="true" />
                </button>
                <input
                  type="file"
                  ref={avatarInputRef}
                  onChange={handleAvatarChange}
                  className="hidden"
                  accept="image/*"
                  aria-label="Upload profile picture"
                />
              </div>
            </div>

            {/* Profile Input Fields */}
            <div className="px-6 pb-6 pt-4">
              <div className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor={`${id}-first-name`}>First name</Label>
                    <Input
                      id={`${id}-first-name`}
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor={`${id}-last-name`}>Last name</Label>
                    <Input
                      id={`${id}-last-name`}
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-username`}>Username</Label>
                  <div className="relative">
                    <Input
                      id={`${id}-username`}
                      className="peer pe-9"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      required
                    />
                    <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                      <Check
                        size={16}
                        strokeWidth={2}
                        className="text-emerald-500"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-website`}>Website</Label>
                  <div className="flex rounded-lg shadow-sm shadow-black/5">
                    <span className="-z-10 inline-flex items-center rounded-s-lg border border-input bg-background px-3 text-sm text-muted-foreground">
                      https://
                    </span>
                    <Input
                      id={`${id}-website`}
                      className="-ms-px rounded-s-none shadow-none"
                      placeholder="yourwebsite.com"
                      value={website.replace(/^https?:\/\//, "")}
                      onChange={(e) => setWebsite(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-bio`}>Biography</Label>
                  <Textarea
                    id={`${id}-bio`}
                    placeholder="Write a few sentences about yourself"
                    value={bioValue}
                    maxLength={maxLength}
                    onChange={handleBioChange}
                    aria-describedby={`${id}-description`}
                  />
                  <p
                    id={`${id}-description`}
                    className="mt-2 text-right text-xs text-muted-foreground"
                    role="status"
                    aria-live="polite"
                  >
                    <span className="tabular-nums">{limit - characterCount}</span>{" "}
                    characters left
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer with Working Save Button */}
          <DialogFooter className="border-t border-border px-6 py-4 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="w-full sm:w-auto cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto cursor-pointer bg-black text-white hover:bg-zinc-800 font-bold flex items-center justify-center gap-2"
            >
              {savedFeedback ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Changes Saved!</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>Save changes</span>
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { Component, Component as EditProfileDialogDemo };

export default Component;
