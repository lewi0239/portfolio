// components/CvDownloadButton.tsx
'use client';

export default function CvDownloadButton() {
  const handleDownload = async () => {
    const url = process.env.NEXT_PUBLIC_BLOB_URL;

    if (!url) {
      console.error('CV Blob URL is not defined');
      return;
    }

    const fileName = url.split('/').pop() ?? 'Brodie-Lewis-CV';

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error('Download failed:', err);
    }
  };

  return (
    <button onClick={handleDownload} className="transition-colors hover:text-primary">
      Resume
    </button>
  );
}
