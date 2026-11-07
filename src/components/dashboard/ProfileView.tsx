import { EditProfileDialogDemo } from '@/components/ui/demo';
import { User, ShieldCheck, Award, Calendar, Mail, Hash } from 'lucide-react';
import { mockUser, UserProfile } from '../../data/user';

interface ProfileViewProps {
  user?: UserProfile;
}

export default function ProfileView({ user = mockUser }: ProfileViewProps) {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Top Banner and Profile Header */}
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-2xl font-bold text-white shadow-md">
              {user.avatar_initials || user.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black tracking-tight text-gray-900">
                  {user.name}
                </h1>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                  <ShieldCheck className="h-3.5 w-3.5" /> Verified Builder
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500">
                {user.email} · Cohort ReBuild '26
              </p>
            </div>
          </div>

          {/* Trigger the Edit Profile Dialog */}
          <div>
            <EditProfileDialogDemo />
          </div>
        </div>

        {/* Quick Details Badges */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-gray-100 pt-6">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Hash className="h-4 w-4 text-purple-600" />
            <span>ID: <strong className="text-gray-900">{user.campus_code_id}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Mail className="h-4 w-4 text-purple-600" />
            <span className="truncate">{user.email}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Calendar className="h-4 w-4 text-purple-600" />
            <span>Joined: <strong>Oct 2026</strong></span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Award className="h-4 w-4 text-purple-600" />
            <span>Certificates: <strong>4 Earned</strong></span>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-base font-bold text-gray-900">
            <User className="h-4 w-4 text-purple-600" /> Builder Bio & Status
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Web developer and hackathon enthusiast passionate about turning ideas into production-ready platforms. Participating in the ReBuild '26 Arena Hackathon.
          </p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-base font-bold text-gray-900">
            <Award className="h-4 w-4 text-purple-600" /> Credentials & Track
          </h2>
          <div className="mt-3 space-y-2 text-sm text-gray-600">
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="font-medium text-gray-500">Track:</span>
              <span className="font-bold text-gray-900">Frontend Specialist</span>
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
