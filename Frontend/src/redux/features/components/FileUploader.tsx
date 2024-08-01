import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import upload from '../assets/icons/upload.svg'
import { convertFileToUrl } from '@/lib/utils';
interface FileUploaderProps {
    files: File[] | undefined;
    onChange: (files: File[]) => void
}

const FileUploader = ({files, onChange}: FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onChange(acceptedFiles)
      }, [])
      const {getRootProps, getInputProps} = useDropzone({onDrop})
    
      return (
        <div {...getRootProps()} className='file-upload'>
          <input {...getInputProps()} />
          {files && files?.length > 0 ? (
            <img src={convertFileToUrl(files[0])} width={1000} height={3000} alt="uploaded image" className='max-h-[400px overflow-hidden object-cover' />
          ): (
            <>
            <img src={upload} width={40} height={40} alt="upload" />
            <div className='file-upload_label'>
                <p className='text-14-regular'>
                    <span className='text-green-500'>Click to upload</span> or drag and drop
                </p>
                <p>
                    SVG, PNG, JPG or GIF (max 800x400)
                </p>
            </div>
            </>

          )}
         
        </div>
    );
};

export default FileUploader;