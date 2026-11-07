import { useState, useEffect } from 'react';
import { EditProfileDialogDemo, ProfileFormData } from '@/components/ui/demo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCharacterLimit } from '@/components/ui/dialog-utils/use-character-limit';
import {
  User,
  ShieldCheck,
  Award,
  Calendar,
  Mail,
  Hash,
  Save,
  Check,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';
import { mockUser, UserProfile } from '../../data/user';

interface ProfileViewProps {
  user?: UserProfile;
  onUpdateUser?: (updated: UserProfile) => void;
}

export default function ProfileView({
  user = mockUser,
  onUpdateUser,
}: ProfileViewProps) {
  // Profile form state
  const [name, setName] = useState(user.name || 'Sai');
  const [email, setEmail] = useState(user.email || 'sai@campuscode.co.in');
  const [username, setUsername] = useState(user.username || 'sai_builder');
  const [website, setWebsite] = useState(user.website || 'https://campuscode.co.in');
  const [track, setTrack] = useState(user.track || 'Frontend Specialist');
  
  const maxLength = 240;
  const {
    value: bio,
    characterCount,
    handleChange: handleBioChange,
    maxLength: limit,
  } = useCharacterLimit({
    maxLength,
    initialValue:
      user.bio ||
      'Web developer and hackathon enthusiast passionate about turning ideas into production-ready platforms. Participating in the ReBuild \'26 Arena Hackathon.',
  });

  // Save feedback state
  const [isSaving, setIsSaving] = useState(false);
  const [showSavedAlert, setShowSavedAlert] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Sync state if user prop changes
  useEffect(() => {
    if (user.name) setName(user.name);
    if (user.email) setEmail(user.email);
    if (user.username) setUsername(user.username);
    if (user.website) setWebsite(user.website);
    if (user.track) setTrack(user.track);
  }, [user]);

  // Track if changes are dirty
  const handleInputChange = (setter: (val: string) => void, val: string) => {
    setter(val);
    setHasUnsavedChanges(true);
    setShowSavedAlert(false);
  };

  const handleSaveAll = (e?: React.FormEvent) => {
    e?.preventDefault();
    setIsSaving(true);

    const updatedUser: UserProfile = {
      ...user,
      name: name.trim() || user.name,
      email: email.trim() || user.email,
      username: username.trim() || user.username,
      website: website.trim() || user.website,
      track: track.trim() || user.track,
      bio: bio.trim(),
      avatar_initials: (name.trim() || user.name).charAt(0).toUpperCase(),
    };

    // Update parent state & localStorage
    if (onUpdateUser) {
      onUpdateUser(updatedUser);
    } else {
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }

    setTimeout(() => {
      setIsSaving(false);
      setHasUnsavedChanges(false);
      setShowSavedAlert(true);
      setTimeout(() => setShowSavedAlert(false), 3500);
    }, 400);
  };

  const handleDiscard = () => {
    setName(user.name || 'Sai');
    setEmail(user.email || 'sai@campuscode.co.in');
    setUsername(user.username || 'sai_builder');
    setWebsite(user.website || 'https://campuscode.co.in');
    setTrack(user.track || 'Frontend Specialist');
    setHasUnsavedChanges(false);
  };

  const handleModalSave = (data: ProfileFormData) => {
    setName(data.name);
    setUsername(data.username);
    setWebsite(data.website);
    
    const updatedUser: UserProfile = {
      ...user,
      name: data.name,
      username: data.username,
      website: data.website,
      bio: data.bio,
      avatarUrl: data.avatarUrl,
      coverUrl: data.coverUrl,
      avatar_initials: data.name.charAt(0).toUpperCase(),
    };

    if (onUpdateUser) {
      onUpdateUser(updatedUser);
    } else {
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }

    setShowSavedAlert(true);
    setHasUnsavedChanges(false);
    setTimeout(() => setShowSavedAlert(false), 3500);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-16">
      {/* Save Success Alert Notification */}
      {showSavedAlert && (
        <div className="flex items-center justify-between rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-emerald-900 shadow-sm animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Check className="h-4 w-4 stroke-[3]" />
            </span>
            <div>
              <p className="text-sm font-bold">Profile changes saved successfully!</p>
              <p className="text-xs text-emerald-700">Your builder credentials and information have been updated.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowSavedAlert(false)}
            className="text-xs font-semibold text-emerald-800 hover:underline cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Top Banner and Profile Summary Header */}
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-2xl font-bold text-white shadow-md">
              {user.avatar_initials || name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black tracking-tight text-gray-900">
                  {name}
                </h1>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                  <ShieldCheck className="h-3.5 w-3.5" /> Verified Builder
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500">
                @{username} · {email} · Cohort ReBuild '26
              </p>
            </div>
          </div>

          {/* Quick Edit Dialog Modal Trigger */}
          <div className="flex items-center gap-2">
            <EditProfileDialogDemo
              initialData={{
                firstName: name.split(' ')[0] || name,
                lastName: name.split(' ').slice(1).join(' ') || '',
                username,
                website,
                bio,
              }}
              onSave={handleModalSave}
              trigger={
                <Button variant="outline" className="flex items-center gap-2 font-bold cursor-pointer hover:bg-gray-50 border-gray-300">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  Edit via Modal
                </Button>
              }
            />
          </div>
        </div>

        {/* Quick Details Badges */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-gray-100 pt-6">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Hash className="h-4 w-4 text-purple-600 shrink-0" />
            <span className="truncate">ID: <strong className="text-gray-900">{user.campus_code_id}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Mail className="h-4 w-4 text-purple-600 shrink-0" />
            <span className="truncate">{email}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Calendar className="h-4 w-4 text-purple-600 shrink-0" />
            <span>Joined: <strong>Oct 2026</strong></span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Award className="h-4 w-4 text-purple-600 shrink-0" />
            <span>Certificates: <strong>4 Earned</strong></span>
          </div>
        </div>
      </div>

      {/* Main Profile Settings Form */}
      <form onSubmit={handleSaveAll} className="space-y-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-gray-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                <User className="h-5 w-5 text-purple-600" /> Profile Information
              </h2>
              <p className="text-xs text-gray-500">Update your builder identity, track specialization, and public links.</p>
            </div>

            {hasUnsavedChanges && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 animate-pulse">
                • Unsaved changes
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Full Name */}
            <div className="space-y-1.5">
              <Label htmlFor="profile-name" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Full Name
              </Label>
              <Input
                id="profile-name"
                value={name}
                onChange={(e) => handleInputChange(setName, e.target.value)}
                placeholder="Your full name"
                required
                className="font-medium"
              />
            </div>

            {/* Username */}
            <div className="space-y-1.5">
              <Label htmlFor="profile-username" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Username / Handle
              </Label>
              <div className="relative">
                <Input
                  id="profile-username"
                  value={username}
                  onChange={(e) => handleInputChange(setUsername, e.target.value)}
                  placeholder="username"
                  required
                  className="font-medium pe-9"
                />
                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3 text-emerald-500">
                  <Check className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="profile-email" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Email Address
              </Label>
              <Input
                id="profile-email"
                type="email"
                value={email}
                onChange={(e) => handleInputChange(setEmail, e.target.value)}
                placeholder="your.email@university.edu"
                required
                className="font-medium"
              />
            </div>

            {/* Track Specialization */}
            <div className="space-y-1.5">
              <Label htmlFor="profile-track" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Track / Specialization
              </Label>
              <Input
                id="profile-track"
                value={track}
                onChange={(e) => handleInputChange(setTrack, e.target.value)}
                placeholder="Frontend Specialist, AI Engineer, etc."
                className="font-medium"
              />
            </div>

            {/* Website / Portfolio */}
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="profile-website" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Portfolio / Website
              </Label>
              <div className="flex rounded-md shadow-xs">
                <span className="inline-flex items-center rounded-s-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-xs text-gray-500">
                  <ExternalLink className="h-3.5 w-3.5 me-1" /> https://
                </span>
                <Input
                  id="profile-website"
                  value={website.replace(/^https?:\/\//, '')}
                  onChange={(e) => handleInputChange(setWebsite, e.target.value)}
                  placeholder="yourportfolio.dev"
                  className="rounded-s-none font-medium"
                />
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="profile-bio" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Builder Biography
              </Label>
              <Textarea
                id="profile-bio"
                value={bio}
                maxLength={maxLength}
                onChange={(e) => {
                  handleBioChange(e);
                  setHasUnsavedChanges(true);
                  setShowSavedAlert(false);
                }}
                rows={3}
                placeholder="Tell other builders and hackathon judges about your skills, interests, and current projects."
                className="font-medium text-sm"
              />
              <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
                <span>Markdown supported. Max {maxLength} characters.</span>
                <span className="font-mono text-purple-600 font-bold">{limit - characterCount} characters left</span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* THE SAVE BUTTON SECTION (Explicit, prominent & responsive) */}
          {/* ======================================================== */}
          <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500 flex items-center gap-1.5">
              <Code2 className="h-4 w-4 text-purple-600" />
              <span>CampusCode Arena Platform · Changes sync across your digital card and pass</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {hasUnsavedChanges && (
                <button
                  type="button"
                  onClick={handleDiscard}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-xs font-bold text-gray-700 shadow-xs hover:bg-gray-50 transition-colors cursor-pointer w-full sm:w-auto"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Discard
                </button>
              )}

              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center justify-center gap-2 rounded-lg border-[2px] border-black bg-black px-6 py-2.5 text-xs font-black text-white uppercase tracking-wider shadow-[4px_4px_0px_0px_#8B5CF6] transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-zinc-800 disabled:opacity-50 cursor-pointer w-full sm:w-auto"
              >
                {isSaving ? (
                  <span>Saving...</span>
                ) : showSavedAlert ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400 stroke-[3]" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
