import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AccountLayout from './layouts/Account';
import ApplyLayout from './layouts/Apply';
import ArticleLayout from './layouts/Article';
import AuthLayout from './layouts/Auth';
import BasicLayout from './layouts/Basic';
import ReportLayout from './layouts/Report';
import WorkspaceLayout from './layouts/Workspace';
import ForbiddenPage from './pages/403';
import NotFoundPage from './pages/404';
import ApplyDetailPage from './pages/ApplyDetail';
import ApplyFormPage from './pages/ApplyForm';
import ApplyUpdateFormPage from './pages/ApplyUpdateForm';
import AssignFormPage from './pages/AssignForm';
import ChangePasswordPage from './pages/ChangePassword';
import FaqPage from './pages/Faq';
import ForgotPasswordPage from './pages/ForgotPassword';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import PrivacyPage from './pages/Privacy';
import ReportDetailPage from './pages/ReportDetail';
import ReportFormPage from './pages/ReportForm';
import ResetPasswordPage from './pages/ResetPassword';
import SignupPage from './pages/Signup';
import TermsPage from './pages/Terms';
import UserProfilePage from './pages/UserProfile';
import WorkspaceDetailPage from './pages/WorkspaceDetail';
import WorkspaceListPage from './pages/WorkspaceList';

const App: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<HomePage />} />

          <Route element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
          </Route>

          <Route element={<ArticleLayout />}>
            <Route path="terms" element={<TermsPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="faq" element={<FaqPage />} />
          </Route>

          <Route path="account" element={<AccountLayout />}>
            <Route path="password" element={<ChangePasswordPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="workspaces" element={<WorkspaceLayout />}>
            <Route index element={<WorkspaceListPage />} />
            <Route path=":identifier" element={<WorkspaceDetailPage />} />
            <Route path=":identifier/apply" element={<ApplyFormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="applies" element={<ApplyLayout />}>
            <Route index element={<NotFoundPage />} />
            <Route path=":id" element={<ApplyDetailPage />} />
            <Route path=":id/assign" element={<AssignFormPage />} />
            <Route path=":id/report" element={<ReportFormPage />} />
            <Route path=":id/update" element={<ApplyUpdateFormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="reports" element={<ReportLayout />}>
            <Route index element={<NotFoundPage />} />
            <Route path=":id" element={<ReportDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="403" element={<ForbiddenPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
