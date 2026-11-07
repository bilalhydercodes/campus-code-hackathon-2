import { useState, useEffect } from 'react';
import { EditProfileDialogDemo, ProfileFormData } from '@/components/ui/demo';
import { Button } from '@/components/ui/button';
import {
  User,
  ShieldCheck,
  Award,
  Calendar,
  Mail,
  Hash,
  Check,
  ExternalLink,
  Edit3
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
  const [name, setName] = useState(user.name || 'Sai');
  const [email, setEmail] = useState(user.email || 'sai@campuscode.co.in');
  const [username, setUsername] = useState(user.username || 'sai_builder');
  const [website, setWebsite] = useState(user.website || 'https://campuscode.co.in');
  const [track, setTrack] = useState(user.track || 'Frontend Specialist');
  const [bio, setBio] = useState(
    user.bio ||
      'Web developer and hackathon enthusiast passionate about turning ideas into production-ready platforms. Participating in the ReBuild \'26 Arena Hackathon.'
  );
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(user.avatarUrl);
  const [showSavedAlert, setShowSavedAlert] = useState(false);

  // Sync state if user prop changes
  useEffect(() => {
    if (user.name) setName(user.name);
    if (user.email) setEmail(user.email);
    if (user.username) setUsername(user.username);
    if (user.website) setWebsite(user.website);
    if (user.track) setTrack(user.track);
    if (user.bio) setBio(user.bio);
    if (user.avatarUrl) setAvatarUrl(user.avatarUrl);
  }, [user]);

  const handleModalSave = (data: ProfileFormData) => {
    setName(data.name);
    setUsername(data.username);
    setWebsite(data.website);
    setBio(data.bio);
    if (data.avatarUrl) setAvatarUrl(data.avatarUrl);

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
    setTimeout(() => setShowSavedAlert(false), 3500);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-12">
      {/* Save Success Alert Notification */}
      {showSavedAlert && (
        <div className="flex items-center justify-between rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-emerald-900 shadow-xs animate-in fade-in slide-in-from-top-2">
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

      {/* Top Banner and Profile Header */}
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="h-16 w-16 rounded-full object-cover border-2 border-purple-500 shadow-md"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-2xl font-bold text-white shadow-md">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black tracking-tight text-gray-900">
                  {name}
                </h1>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Verified Builder</span>
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500">
                @{username} · {email} · Cohort ReBuild '26
              </p>
            </div>
          </div>

          {/* Upper Action Button (Edit Profile Modal) */}
          <div className="flex items-center gap-2">
            <EditProfileDialogDemo
              initialData={{
                firstName: name.split(' ')[0] || name,
                lastName: name.split(' ').slice(1).join(' ') || '',
                username,
                website,
                bio,
                avatarUrl,
              }}
              onSave={handleModalSave}
              trigger={
                <Button
                  variant="outline"
                  className="flex items-center gap-2 font-bold cursor-pointer hover:bg-gray-50 border-gray-300"
                >
                  <Edit3 className="h-4 w-4 text-purple-600" />
                  Edit profile
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

      {/* Profile Details Information Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Builder Bio Card */}
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-xs">
          <h2 className="flex items-center gap-2 text-base font-bold text-gray-900">
            <User className="h-4 w-4 text-purple-600" /> Builder Bio & Status
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 whitespace-pre-line">
            {bio}
          </p>
        </div>

        {/* Credentials & Track Card */}
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-xs">
          <h2 className="flex items-center gap-2 text-base font-bold text-gray-900">
            <Award className="h-4 w-4 text-purple-600" /> Credentials & Track
          </h2>
          <div className="mt-3 space-y-2.5 text-sm text-gray-600">
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="font-medium text-gray-500">Track:</span>
              <span className="font-bold text-gray-900">{track}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="font-medium text-gray-500">Website:</span>
              <a
                href={website.startsWith('http') ? website : `https://${website}`}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-purple-600 hover:underline flex items-center gap-1"
              >
                {website.replace(/^https?:\/\//, '')}
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="font-medium text-gray-500">Hackathons Entered:</span>
              <span className="font-bold text-gray-900">3 Total (1 Active)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-medium text-gray-500">Team Status:</span>
              <span className="font-bold text-emerald-600">Team Formed (HackMate AI)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
