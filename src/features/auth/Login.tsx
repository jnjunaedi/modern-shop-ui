import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Loader2, Eye, EyeOff } from 'lucide-react';
import google from '../../assets/google.png';
import gmail from '../../assets/gmail.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import { authService } from '../../services/authService';
import { useAuth } from '../../store/AuthContext';
import { toast } from 'sonner';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await authService.login({ email, password });
      setAuthenticated(true);
      toast.success('Berhasil masuk! Selamat datang kembali.');
      navigate('/');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Email atau password salah.';
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200 px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-blue-50">
        <div className="flex justify-center items-center gap-1.5 text-center mb-7">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">Masuk Dulu</h1>
          <ShoppingBag size={25} className="text-blue-600" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="nama@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">Password</label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Masukkan password Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-3.5 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 cursor-pointer"
                aria-label={showPassword ? 'Sembunyikan password' : 'Lihat password'}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2.5 px-4 rounded-lg shadow-sm transition cursor-pointer"
          >
            {isLoading && <Loader2 size={18} className="animate-spin" />}
            {isLoading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>

        <div className="relative my-7">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-3 text-gray-400 font-medium">Atau metode lainnya</span>
          </div>
        </div>

        <div className="space-y-3">
          <button type="button" className="w-full flex items-center justify-between px-4 py-2.5 border border-gray-300 rounded-full bg-white  transition text-sm font-medium text-gray-700 cursor-pointer">
            <img src={google} alt="Google" className="w-5 h-5 object-contain" />
            <span>Lanjutkan dengan Google</span>
            <span className="w-5" />
          </button>

          <button type="button" className="w-full flex items-center justify-between px-4 py-2.5 rounded-full bg-red-500  transition text-sm font-medium text-white cursor-pointer">
            <img src={gmail} alt="Gmail" className="w-5 h-5 rounded-full object-contain bg-white p-0.5" />
            <span>Lanjutkan dengan Email</span>
            <span className="w-5" />
          </button>

          <Link to="/register" className="w-full flex items-center justify-between px-4 py-2.5 border rounded-full transition text-sm text-gray-700 font-semibold ">
            <User size={20} />
            <span>Daftar Akun</span>
            <span className="w-5" />
          </Link>
        </div>

        <div className="mt-7 text-center">
          <p className="text-xs text-gray-400 mb-3">-- Atau lanjutkan dengan --</p>
          <div className="flex gap-4 justify-center items-center">
            <button type="button" className="p-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition cursor-pointer" title="Masuk dengan Facebook">
              <img src={facebook} alt="Facebook" className="w-6 h-6 object-contain" />
            </button>
            <button type="button" className="p-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition cursor-pointer" title="Masuk dengan Instagram">
              <img src={instagram} alt="Instagram" className="w-6 h-6 object-contain" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
