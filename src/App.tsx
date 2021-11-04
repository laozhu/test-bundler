import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AccountLayout = lazy(
  () => import(/* webpackChunkName: "layout-account" */ './layouts/Account'),
);

const ApplyLayout = lazy(
  () =>
    import(
      /* webpackPrefetch: 3 */
      /* webpackChunkName: "layout-apply" */ './layouts/Apply'
    ),
);

const ArticleLayout = lazy(
  () => import(/* webpackChunkName: "layout-article" */ './layouts/Article'),
);

const AuthLayout = lazy(
  () =>
    import(
      /* webpackPrefetch: 2 */
      /* webpackChunkName: "layout-auth" */ './layouts/Auth'
    ),
);

const BasicLayout = lazy(
  () =>
    import(
      /* webpackPrefetch: 1 */
      /* webpackChunkName: "layout-basic" */ './layouts/Basic'
    ),
);

const ReportLayout = lazy(() => import(/* webpackChunkName: "layout-report" */ './layouts/Report'));

const WorkspaceLayout = lazy(
  () =>
    import(
      /* webpackPrefetch: 4 */
      /* webpackChunkName: "layout-workspace" */ './layouts/Workspace'
    ),
);

const ForbiddenPage = lazy(() => import(/* webpackChunkName: "page-403" */ './pages/403'));

const NotFoundPage = lazy(() => import(/* webpackChunkName: "page-404" */ './pages/404'));

const ApplyDetailPage = lazy(
  () => import(/* webpackChunkName: "page-apply-detail" */ './pages/ApplyDetail'),
);

const ApplyFormPage = lazy(
  () => import(/* webpackChunkName: "page-apply-form" */ './pages/ApplyForm'),
);

const ApplyListPage = lazy(
  () =>
    import(
      /* webpackPrefetch: 7 */
      /* webpackChunkName: "page-apply-list" */ './pages/ApplyList'
    ),
);

const ApplyUpdateFormPage = lazy(
  () => import(/* webpackChunkName: "page-apply-update-form" */ './pages/ApplyUpdateForm'),
);

const AssignFormPage = lazy(
  () => import(/* webpackChunkName: "page-assign-form" */ './pages/AssignForm'),
);

const ChangePasswordPage = lazy(
  () => import(/* webpackChunkName: "page-change-password" */ './pages/ChangePassword'),
);

const FaqPage = lazy(() => import(/* webpackChunkName: "page-faq" */ './pages/Faq'));

const ForgotPasswordPage = lazy(
  () => import(/* webpackChunkName: "page-forgot-password" */ './pages/ForgotPassword'),
);

const HomePage = lazy(
  () =>
    import(
      /* webpackPrefetch: 5 */
      /* webpackChunkName: "page-home" */ './pages/Home'
    ),
);

const LoginPage = lazy(
  () =>
    import(
      /* webpackPrefetch: 6 */
      /* webpackChunkName: "page-login" */ './pages/Login'
    ),
);

const PrivacyPage = lazy(() => import(/* webpackChunkName: "page-privacy" */ './pages/Privacy'));

const ReportDetailPage = lazy(
  () => import(/* webpackChunkName: "page-report-detail" */ './pages/ReportDetail'),
);

const ReportFormPage = lazy(
  () => import(/* webpackChunkName: "page-report-form" */ './pages/ReportForm'),
);

const ResetPasswordPage = lazy(
  () => import(/* webpackChunkName: "page-reset-password" */ './pages/ResetPassword'),
);

const SignupPage = lazy(() => import(/* webpackChunkName: "page-signup" */ './pages/Signup'));

const TermsPage = lazy(() => import(/* webpackChunkName: "page-terms" */ './pages/Terms'));

const UserProfilePage = lazy(
  () => import(/* webpackChunkName: "page-user-profile" */ './pages/UserProfile'),
);

const WorkspaceDetailPage = lazy(
  () => import(/* webpackChunkName: "page-workspace-detail" */ './pages/WorkspaceDetail'),
);

const WorkspaceListPage = lazy(
  () =>
    import(
      /* webpackPrefetch: 8 */
      /* webpackChunkName: "page-workspace-list" */ './pages/WorkspaceList'
    ),
);

const role = 'PHYSICIAN';

const App: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="Basic Layout Loading...">
              <BasicLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback="Page Loading...">
                <HomePage role={role} />
              </Suspense>
            }
          />
          <Route
            element={
              <Suspense fallback="Auth Layout Loading...">
                <AuthLayout />
              </Suspense>
            }
          >
            <Route
              path="login"
              element={
                <Suspense fallback="Page Loading...">
                  <LoginPage />
                </Suspense>
              }
            />
            <Route
              path="signup"
              element={
                <Suspense fallback="Page Loading...">
                  <SignupPage />
                </Suspense>
              }
            />
            <Route
              path="forgot-password"
              element={
                <Suspense fallback="Page Loading...">
                  <ForgotPasswordPage />
                </Suspense>
              }
            />
            <Route
              path="reset-password"
              element={
                <Suspense fallback="Page Loading...">
                  <ResetPasswordPage />
                </Suspense>
              }
            />
          </Route>

          <Route
            element={
              <Suspense fallback="Article Layout Loading...">
                <ArticleLayout />
              </Suspense>
            }
          >
            <Route
              path="terms"
              element={
                <Suspense fallback="Page Loading...">
                  <TermsPage />
                </Suspense>
              }
            />
            <Route
              path="privacy"
              element={
                <Suspense fallback="Page Loading...">
                  <PrivacyPage />
                </Suspense>
              }
            />
            <Route
              path="faq"
              element={
                <Suspense fallback="Page Loading...">
                  <FaqPage />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="account"
            element={
              <Suspense fallback="Account Layout Loading...">
                <AccountLayout />
              </Suspense>
            }
          >
            <Route
              path="password"
              element={
                <Suspense fallback="Page Loading...">
                  <ChangePasswordPage />
                </Suspense>
              }
            />
            <Route
              path="profile"
              element={
                <Suspense fallback="Page Loading...">
                  <UserProfilePage />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback="Page Loading...">
                  <NotFoundPage />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="workspaces"
            element={
              <Suspense fallback="Workspace Layout Loading...">
                <WorkspaceLayout />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback="Page Loading...">
                  <WorkspaceListPage />
                </Suspense>
              }
            />
            <Route
              path=":identifier"
              element={
                <Suspense fallback="Page Loading...">
                  <WorkspaceDetailPage />
                </Suspense>
              }
            />
            <Route
              path=":identifier/apply"
              element={
                <Suspense fallback="Page Loading...">
                  <ApplyFormPage />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback="Page Loading...">
                  <NotFoundPage />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="applies"
            element={
              <Suspense fallback="Apply Layout Loading...">
                <ApplyLayout />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback="Page Loading...">
                  <ApplyListPage />
                </Suspense>
              }
            />
            <Route
              path=":id"
              element={
                <Suspense fallback="Page Loading...">
                  <ApplyDetailPage />
                </Suspense>
              }
            />
            <Route
              path=":id/assign"
              element={
                <Suspense fallback="Page Loading...">
                  <AssignFormPage />
                </Suspense>
              }
            />
            <Route
              path=":id/report"
              element={
                <Suspense fallback="Page Loading...">
                  <ReportFormPage />
                </Suspense>
              }
            />
            <Route
              path=":id/update"
              element={
                <Suspense fallback="Page Loading...">
                  <ApplyUpdateFormPage />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback="Page Loading...">
                  <NotFoundPage />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="reports"
            element={
              <Suspense fallback="Report Layout Loading...">
                <ReportLayout />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback="Page Loading...">
                  <NotFoundPage />
                </Suspense>
              }
            />
            <Route
              path=":id"
              element={
                <Suspense fallback="Page Loading...">
                  <ReportDetailPage />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback="Page Loading...">
                  <NotFoundPage />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="403"
            element={
              <Suspense fallback="Page Loading...">
                <ForbiddenPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback="Page Loading...">
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
